export class WfhRequest {
  constructor(
    public approved: boolean,
    public dayRequested: string,
    public dayRequestCreated: string,
    public reason: string,
    public user: string
  ) { }
  // This should have 'Copy URL' button
}
