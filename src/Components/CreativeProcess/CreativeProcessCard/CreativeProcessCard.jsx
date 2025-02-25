import './creativeProcessCard.css';

const CreativeProcessCard = ({ text1, text2 }) => {
    return (
        <>
            <div className='creativeProcessCard__Container'>
                <div className='creativeProcess__Card'>
                    <ul>
                        <li><p className='creativeProcess__Text1'>{text1}</p></li>
                        <hr />
                        <li><p className='creativeProcess__Text2'>{text2}</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CreativeProcessCard;