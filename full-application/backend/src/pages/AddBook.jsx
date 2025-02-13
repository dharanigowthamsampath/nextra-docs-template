function AddBook() {
  return (
    <>
      <div className="container mt-5">
        <form className="form-control">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input type="text" className="form-control mb-3" />
          <label htmlFor="author" className="mb-1">
            Author
          </label>
          <input type="text" className="form-control mb-3" />
          <label htmlFor="price" className="mb-1">
            Price
          </label>
          <input type="number" className="form-control mb-3" />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </>
  );
}

export default AddBook;
