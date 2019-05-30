export const Auth = {
 _token: null,

 login() {
   //TODO request to the server
   this._token = 'token';

   this._storeToken();
 },

 _storeToken() {
   try {
    window.localStorage.setItem('token', this._token);
   } catch (err) {
     console.error(err);
   }
 }
}