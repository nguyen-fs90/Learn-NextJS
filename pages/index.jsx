const Home = (props) => {
    return <h1>{props.name}</h1>
}

export const getStaticProps = async () => {
    return {
        props: {
            name: 'Nguyen Manh Hiep',
        }
    }
};

export default Home