import pickle
from ../model/UserModel import *

class UserRepository:

	def __init__(self):
		__udict = pickle.load( open("users.p", "rb") );

	def put(self, user):
		assert isinstance(user, UserModel);
		__udict[user.id] = user;

	def get(self, uid):
		return __udict[uid];

	def save(self):
		pickle.dump( __udict, open("users.p", "wb") );
