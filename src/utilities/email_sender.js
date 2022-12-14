let send_email = (to,subject,body) =>{
 const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ "email":to,
  "sub":subject,
  "text":body })
};
fetch('http://localhost:5100/api/email', requestOptions)
  // .then(response => response.json())
  // .then(data => this.setState({ postId: data.id }));

}
export {send_email};