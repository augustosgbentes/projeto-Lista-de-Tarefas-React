const Filter = (filter, setFilter) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <p>Status</p>
        <select value={filter} onChange={(e)=> setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
        <div>
            <p>Ordem Alfábetica</p>
            <button>Asc</button>
            <button>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
