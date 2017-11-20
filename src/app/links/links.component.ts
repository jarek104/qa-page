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

@Component({
  selector: 'qa-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  linksFirestoreCollection: AngularFirestoreCollection<Link>;
  linksFirestoreDocument: AngularFirestoreDocument<Link>;
  linksList: any;
  linkToEdit: Observable<Link>;
  newLink = new Link('', '', '', '', 0);
  temp: string;

  constructor( private afs: AngularFirestore ) { }
  // , ref => ref.orderBy('clickCounter', 'asc')
  ngOnInit() {
    this.linksFirestoreCollection = this.afs.collection('Links', ref => ref.orderBy('title', 'asc'));
    this.linksList = this.linksFirestoreCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Link;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }
  assignLinkEdit(linkID) {
    this.linksFirestoreDocument = this.afs.doc('Links/' + linkID);
    this.linkToEdit = this.linksFirestoreDocument.valueChanges();
  }

  updateLink(ti, d, u) {
    this.linksFirestoreDocument
      .update({
        title: ti,
        description: d,
        address: u,
        clickCounter: 0
      });
  }

  addLink() {
    const data = {
      title: this.newLink.title,
      description: this.newLink.description,
      address: this.newLink.address,
      color: this.newLink.color,
      clickCounter: 0
    };
    this.afs.collection('Links').add(data);
  }

  deleteLink() {
    this.linksFirestoreDocument.delete();
    console.log(this.linksFirestoreDocument);
  }
  copied() {
    console.log('Copied!');
  }
}
