const withLog = (Component) => {

    function ComponentWitchLog (props) {
        console.log('hola desde el hoc')
        return (
        <Component {...props} />
        )
    }
    return ComponentWitchLog
}
export default withLog 