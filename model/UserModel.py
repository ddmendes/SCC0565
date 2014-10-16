import uuid

class UserModel:

	def __init__(self, name, birthdate, city, state, phone, login, password):
		self.id = uuid.uuid1();
		self.name = name;
		self.birthdate = birthdate;
		self.city = city;
		self.state = state;
		self.phone = phone;
		self.login = login;
		self.password = password;