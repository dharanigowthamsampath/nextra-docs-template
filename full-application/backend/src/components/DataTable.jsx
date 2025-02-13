function DataTable({ data }) {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">title</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
              <th scope="col">Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DataTable;
