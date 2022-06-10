export const login = user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
  );
  
  export const signup = user => {
    return $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user }
    })
  };


  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );

  export const fetchUser= (userId) => {

    return $.ajax({
      method: 'GET',
      url: `/api/users/${userId}`
    })
  };

  
  export const updateUser = formData => {
    // console.log(formData.get('user[photo]'));
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${parseInt(formData.get('user[id]'))}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    })
  };
  
