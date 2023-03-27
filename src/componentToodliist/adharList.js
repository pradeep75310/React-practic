import StyleButton from "./styleButton";
function AdharIteamList(props) {
    const { id, imgUrl, name, age, address, phone } = props;

    return (
        <li className="list">
            <a href="#">
                <img src={imgUrl} alt='image' />
                <h1 className="hello">{id}</h1>
                <h3 className="name">{name}</h3>
                <h3 className="age">{age}</h3>
                <h6 className="phone">{phone}</h6>
                <p className="address">{address}</p>
                <div className="btnstyle">
                    <StyleButton type='normal' label='white' />
                    <StyleButton type='primary' label='blue' />
                    <StyleButton type='danger' label='red' />
                </div>
            </a>
        </li>
    )
}
export default AdharIteamList;
