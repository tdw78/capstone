const ApplicationPolicy = require("./application");

module.exports = class reviewPolicy extends ApplicationPolicy {

  // new() {
  //   return this.user != null;
  // }

  // create() {
  //   return this.new();
  // }

  _isOwner() {
    return this.record && (this.record.userId == this.user.id);
  }

  _isAdmin() {
    return this.user && this.user.role == "admin";
  }

  _isMember() {
   return this.user && this.user.role == "member";
 }

  new() {
    return this.user != null && this._isMember();
  }

  create() {
    return this.new();
  }

  show() {
    return true;
  }

  edit() {
    return this.new() &&
      this.record && (this._isOwner() || this._isAdmin());
  }

  update() {
    return this.edit();
  } 

  destroy() {
    return this.update();
  }

  
}


