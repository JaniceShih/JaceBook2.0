
export const createFriend = friend => {
    // debugger
    return $.ajax({
      method: 'POST',
      url: '/api/friends',
      data: { friend }
    })
  };

export const deleteFriend = (friendId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/friends/${friendId}`
    })
)

export const updateFriend = (friend) =>{
    return $.ajax({
      url: `/api/friends/${friend.id}`,
      method: 'PATCH',
      data: {friend}
    })
  }

export const fetchFriends = () => (
    $.ajax({
        method: 'GET',
        url: '/api/friends'
    })
);