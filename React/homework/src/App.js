import './App.css'
import Simpsons from './components/Simpsons'
function App() {
    return (
        <>
            <Simpsons
                img={'https://s3.crackedcdn.com/phpimages/article/5/7/0/901570.jpg'}
                name={'Homer Simpson'}
                age={'35'}
                gender={'male'}
            />
            <Simpsons
                img={'https://s3.crackedcdn.com/phpimages/article/5/6/9/901569.jpg'}
                name={'Lisa Simpson'}
                age={'13'}
                gender={'female'}
            />
            <Simpsons
                img={'https://s3.crackedcdn.com/phpimages/article/5/6/8/901568.jpg'}
                name={'Bart Simpson'}
                age={'10'}
                gender={'male'}
            />
            <Simpsons
                img={'https://s3.crackedcdn.com/phpimages/article/5/6/7/901567.jpg'}
                name={'Ned Flanders'}
                age={'42'}
                gender={'male'}
            />
            <Simpsons
                img={'https://s3.crackedcdn.com/phpimages/article/5/6/6/901566.jpg'}
                name={'Krusty the Clown'}
                age={'28'}
                gender={'male'}
            />
        </>
    )
}

export default App
