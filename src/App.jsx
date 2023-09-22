import './App.css'
import HookForm from './components/hook-form/HookForm'
import RefForm from './components/ref-form/RefForm'
import ReusableForm from './components/resuable-form/ReusableForm'
import SimpleForm from './components/simple-form/SimpleForm'
import StatefulForm from './components/stateful-form/StatefulForm'

function App() {

  const handleSignIn = data => {
    // e.preventDefault();
    console.log(`sign up ${data}`)
    console.log(`sign up `, data)
  }
  const handleUpdate = data => {
    // e.preventDefault();
    console.log(`update ${data}`)
    console.log(`update `, data)
  }

  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formtitle={`sign in`}
        handleSubmit={handleSignIn}
      >
        <section>
          <h2>Sign in</h2>
        </section>

      </ReusableForm>
      <ReusableForm
      formtitle={`uodate profile`}
      submitBtnText={`Update`}
      handleSubmit={handleUpdate}>
        <section>
          <h2>Update</h2>
        </section>
      </ReusableForm>
    </>
  )
}

export default App
