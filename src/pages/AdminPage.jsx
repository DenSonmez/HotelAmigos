

function AdminPage({ isAdmin }) {
  console.log('isAdmin', isAdmin);
  return (
    <div id="subpage">
      <h1>Admin page</h1>
      <p>This is for Admins only.</p>
      {isAdmin ? (
        <p>Du er faktisk en admin bruger</p>
      ) : (
        <p>Du er jo ikke engang admin - dude!</p>
      )}
    </div>
  );
}

export default AdminPage;
