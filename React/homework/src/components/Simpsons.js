import style from './Simposns.module.css'

const Simpsons = props => {
    const { img, name, age, gender } = props

    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <img src={img} alt="" />
            </div>
            <div className={style.right}>
                <h2>Name: {name}</h2>
                <h3>Age: {age}</h3>
                <h3>Gender: {gender}</h3>
            </div>
        </div>
    )
}

export default Simpsons
