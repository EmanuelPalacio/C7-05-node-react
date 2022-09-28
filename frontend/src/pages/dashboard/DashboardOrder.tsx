const DashboardOrder: React.FC = () =>{

    return(
        <div>
            <p>aca va el id</p>
            <form>
                <input type="number" name="Mesa" placeholder="Numero de mesa"/>
                <select title="timeSelect" name="time">
                    <option>5min</option>
                    <option>10min</option>
                    <option>15min</option>
                    <option>20min</option>
                    <option>25min</option>
                    <option>30min</option>
                    <option>35min</option>
                    <option>40min</option>
                </select>
                <button type="button">Generar orden</button>
            </form>
        </div>
    )
}

export default DashboardOrder;