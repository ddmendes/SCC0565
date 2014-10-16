from ../model/UserModel import *
from ../repository/UserRepository import *

def SaveUser(user):
	assert isinstace(user, UserModel);
	userRepository = new UserRepository();
	userRepository.put(user);
	userRepository.save();