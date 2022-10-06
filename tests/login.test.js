const{login} = require('./login.js')
it('should login', ()=>{
    const loginResponse = login();
    expect(helloResponse).toBe('login');
});