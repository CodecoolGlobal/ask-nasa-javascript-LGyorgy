const DatePicker = ({ date, onChange }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    }

    return (
        <form>
            <input onChange={handleChange} type="date" name="date" value={date} />
        </form>
    );
}

export default DatePicker;