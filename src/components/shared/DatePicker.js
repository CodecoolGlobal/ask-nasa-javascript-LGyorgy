export default function DatePicker(props) {
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <form>
            <input onChange={handleChange} type="date" name="date" value={props.date} />
        </form>
    );
}