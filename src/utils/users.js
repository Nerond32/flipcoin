const sortUsers = (hostId, users) => {
  const sortedUsers = users.sort((a, b) => {
    if (a.userId === hostId) {
      return -1;
    }
    if (b.userId === hostId) {
      return 1;
    }
    if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
      return -1;
    }
    if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return sortedUsers;
};

export default sortUsers;
