import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Link } from '../data models/link';
import { AngularFireModule } from 'angularfire2';
import { Browsers } from '../data models/browsers';

@Component({
  selector: 'qa-browsers',
  templateUrl: './browsers.component.html',
  styleUrls: ['./browsers.component.css']
})
export class BrowsersComponent implements OnInit {

  browsersFirestoreCollection: AngularFirestoreCollection<Browsers>;
  browsersFirestoreDocument: AngularFirestoreDocument<Browsers>;
  browsersList: any;
  browsersToEdit: Observable<Browsers>;
  newBrowsers = new Browsers('', '', '', '', '', '', '', '');


  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.browsersFirestoreCollection = this.afs.collection('BrowserSupport', ref => ref.orderBy('onbaseVersion', 'asc'));
    this.browsersList = this.browsersFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Browsers;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  assignBrowsersToEdit(browserID) {
    this.browsersFirestoreDocument = this.afs.doc('BrowserSupport/' + browserID);
    this.browsersToEdit = this.browsersFirestoreDocument.valueChanges();
    console.log(browserID + ' assigned');
  }

  updateBrowsers(ob, ie, ed, ch, ff, ffe, sa, co) {
    console.log(this.browsersFirestoreDocument + ' assigned');
    this.browsersFirestoreDocument
      .update({
        onbaseVersion: ob,
        minIE: ie,
        minEdge: ed,
        minChrome: ch,
        minFF: ff,
        minFFESR: ffe,
        minSafari: sa,
        comments: co,
      });
  }

  addOnbaseVersion() {
    const data = {
      onbaseVersion: this.newBrowsers.onbaseVersion,
      minIE: this.newBrowsers.minIE,
      minChrome: this.newBrowsers.minChrome,
      minEdge: this.newBrowsers.minEdge,
      minFF: this.newBrowsers.minFF,
      minFFESR: this.newBrowsers.minFFESR,
      minSafari: this.newBrowsers.minSafari,
      comments: this.newBrowsers.comments
    };
    this.afs.collection('BrowserSupport').add(data);
  }

  deleteBrowsers() {
    this.browsersFirestoreDocument.delete();
  }

}
