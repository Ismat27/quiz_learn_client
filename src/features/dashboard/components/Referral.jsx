const Referral = ({data}) => {
    const {date, img, fullname, status} = data
    return (
        <tr>
            <td>
                <img src={img} alt="" />
                <p>{fullname}</p>
            </td>
            <td>{date}</td>
            <td>
                <span className="status">{status}</span>
            </td>
        </tr>
    )
}

export default Referral