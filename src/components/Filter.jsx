import './filters.scss'

const Filter = ({ filter, setFilter, sort, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div className='options'>
                    <p>status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} >
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div className='options'>
                    <p>Ordenar:</p>
                    <select value={sort} onChange={(e) => setSort(e.target.value)} >
                        <option value="None">None</option>
                        <option value="Asc">Asc</option>
                        <option value="Desc">Desc</option>
                    </select>

                </div>
            </div>
        </div>
    )
}

export default Filter