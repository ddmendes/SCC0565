from ../model/UserModel import *
import ../service/CadastroService
import cgi

p = cgi.FieldStorage()
User user = new UserModel(p['name'], p['birthdate'], p['city'], p['state'], p['phone'], p['email'], p['password']);
CadastroService.SaveUser(user);