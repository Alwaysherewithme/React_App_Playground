import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Appwm.css';

// Stateless Function Component
/*
const Appwm = () => {
     return <h1>Hello World!</h1>
 }
// const Appwm = () => <h1>Hello World!</h1>
*/

// Stateable Class Component
class Appwm extends React.Component {
    constructor() {
        /**
         * Calling super() first in constructor gives the keyword "this" the context within our component, 
        * rather than its parent class React.Component.
        */
        super()
        /**
         * Unlike props, which are a collection of values that are meant to be passed into our component as static value, 
         * it's not meant to be changed by our component. State represents a collection of values that is meant to be managed, 
         * as well as updated by our component.
         */
        this.state = {
            txt: 'state txt',
            content: '-----',
            ref_a: '',
            ref_c: 'default state ref_c',
            ref_d: 'default state ref_d',
            count: 0
        }
        // this.update = this.update.bind(this)
        this.modify = this.modify.bind(this)
        this.inputTyping = this.inputTyping.bind(this)
    }

    // not a part of the specification, this is just a custom method on our component.
    update(e) {
        this.setState({
            txt: e.target.value,
            cat: 8
        })
    }

    modify(e) {
        this.setState({
            content: e.type
        })
    }

    inputTyping(/* e */) {
        this.setState({
            // ref_a: e.target.value,
            // ref_b: e.target.value

            // Refs are a way for us to reference a node, or an instance of a component in our application
            ref_a: this.refs.a.value,
            ref_b: this.b.value,
            // ref_c: this.c.value,   // Error!
            ref_c: ReactDOM.findDOMNode(this.c).value,
            // ref_c: this.refs.parent_ref.refs.child_ref.value,

            // Below findDOMNode call is referencing the div now, which has no value
            // ref_d: ReactDOM.findDOMNode(this.d).value
            ref_d: this.d.refs.input2.value
        })
    }

    buttonClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentWillMount() {
        console.log("********** component will mount **********")
        this.setState({ mid: 6 })
    }

    render() {
        console.log("********** render **********")
        // return <h1>Good morning!</h1>
        // return React.createElement('h1', null, 'Good night!')
        // return <h1 className="">Good morning!</h1>
        
        // Adjacent JSX elements must be wrapped in an enclosing tag
        // wrap my JSX in parentheses just so that I can utilize all the white space
        let txt = this.props.txt
        console.log(this)
        return (
            <div>
                <h1>Hello World!</h1>
                <b>Bold</b>
                <h1>txt: { txt }</h1>
                <h1>cat: { this.props.cat }</h1>
                <h1>val: { this.props.val }</h1>
                <div>
                    {/* {I'm going to call this.update, the custom method that we created. I'm going to go ahead and bind that with a context of this.} */}
                    {/* Use React Components as Children for Other Components */}
                    <Widget update={ this.update.bind(this) } />
                    <Widget update={ this.update.bind(this) } />
                    <h2>txt: { this.state.txt }, cat: { this.state.cat }</h2>
                </div>
                {/* Access Nested Data with Reacts props.children */}
                <Button>I <Heart /> React!</Button>
                <div>
                    <textarea 
                    // Event handlers are passed an instance of SyntheticEvent in React.
                        onKeyPress={ this.modify }
                        onCopy={ this.modify }
                        onCut={ this.modify }
                        onPaste={ this.modify }
                        onFocus={ this.modify }
                        onBlur={ this.modify }
                        onDoubleClick={ this.modify }
                        onTouchStart={ this.modify }
                        onTouchMove={ this.modify }
                        onTouchEnd={ this.modify }
                        cols="30"
                        rows="3"
                    />
                    <h3>{ this.state.content }</h3>
                </div>
                <div>
                    <input 
                        ref="a"
                        type="text" 
                        onChange={ this.inputTyping } 
                        placeholder="Type and see right ..."
                    />
                    <span>{ this.state.ref_a }</span>
                    <br />
                    <input 
                    /** 
                     * The ref attribute or prop can also take a callback. Like I said before, it's returning the node or component 
                     * that we're referencing, we get the node, we could take that, and here in our callback method, 
                     * we could say this.a is equal to the node, and now for a, we can just call it, this.a. 
                     * We get back that node, we can use the DOM method of value. Save that, and everything works as expected.
                     */
                        ref={ node => this.b = node }
                        type="text" 
                        onChange={ this.inputTyping } 
                        placeholder="Type and see right ..."
                    />
                    <span>{ this.state.ref_b }</span>
                    <br />
                    <Input
                        ref={ component => this.c = component }
                        // ref="parent_ref"
                        inputTyping={ this.inputTyping }
                    />
                    <span>{ this.state.ref_c }</span>
                    <br />
                     <Input2
                        ref={ component => this.d = component }
                        inputTyping={ this.inputTyping }
                    />
                    <span>{ this.state.ref_d }</span>
                </div>
                <div>
                    <button onClick={ this.buttonClick.bind(this) }>{ this.state.count * this.state.mid }</button>
                </div>
            </div>
        )
        /*
        return <div>
            <h1>Hello World!</h1>
                <b>Bold</b>
            </div>
        */
    }

    componentDidMount() {
        console.log("********** component did mount **********")
        console.log(ReactDOM.findDOMNode(this))
        this.inc = setInterval(this.buttonClick.bind(this), 1000)
    }

    // In component willUnmount, we have the opportunity to clean up any running processes that we might need to.
    componentWillUnmount() {
        console.log("********** component will unmount **********")
        clearInterval(this.inc)
    }

}

// we can define the properties that we're going to be looking for in our component by adding a property to our component called PropTypes.
Appwm.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired,
    /**
    * If we want to achieve further validation, we can instead of returning a React.PropTypes, we can return a custom function. 
    * This function is going to take in props, which is all the props that our components received, propName, 
    * which is the name for this particular prop, as well as our component.
    */
    wm(props, propName, component) {
        if(!(propName in props)) {
            return new Error(`missing ${propName}!`)
        }
        if(props[propName].length < 6) {
            return new Error(`${propName} was too short!`)
        }
    }
}

// We can also set a series of default properties by adding a property to our component called defaultProps.
Appwm.defaultProps = {
    val: "defalut prop val",
    cat: 8,
    txt: "default prop txt"
}

const Widget = (props) => <div><input type="text" onChange={ props.update } placeholder="Type and see below ..." /></div>

const Button = (props) => <button>{ props.children }</button>

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

class Input extends React.Component {
    render() {
        return <input type="text" ref="child_ref" onChange={ this.props.inputTyping } placeholder="Type and see right ..." />
    }
}

class Input2 extends React.Component {
    render() {
        return <div>
            <input ref="input2" type="text" onChange={ this.props.inputTyping } placeholder="Type and see right ..." />
        </div>
    }
}

class Wrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            increase: false,
            items: [],
            source: `/* const App = (props) => {
                var myStyle = {
                    backgroundColor: "#000",
                    height: 10
                }
                return (
                    <div style={myStyle}>
                        <a href="#" data-notrendered="x" onClick={update}>{/* this is a comment */}this is the text{ 5>3 ? "Yes":"No" }{ 3<5 && '3<5' }</a>
                    </div>
                )
            } */`,
            output: "",
            err: ""
        }
    }

    

    change() {
        ReactDOM.render(
            <Wrapper price={ this.props.price + 1 } />,
            document.getElementById('root')
        )
    }

    mount() {
        ReactDOM.render(<Appwm wm />, document.getElementById('id_a'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('id_a'))
    }

    search(e) {
        this.setState({
            filter: e.target.value
        })
    }

    jsxCompile(e) {
        let code = e.target.value
        try {
            this.setState({
                output: window.Babel.transform(code, { presets: ["es2015", "react"]}).code,
                err: ''
            })
        } catch(err) {
            this.setState({
                err: err.message
            })
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            // .then( ({ results: items }) => this.setState({ items }))
            .then( json => this.setState({ items: json }) )
    }

    render() {
        console.log(this.state.increase)
        let newItems = this.state.items
        if(this.state.filter) {
            // Below: Warning: Do not mutate state directly. Use setState()
            // this.state.items = this.state.items.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
            newItems = newItems.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        return (
            <div>
                <b>JSX Compiler</b>
                <header>{ this.state.err }</header>
                <div className="container">
                    <textarea onChange={ this.jsxCompile.bind(this) } defaultValue={ this.state.source } />
                    <pre>{ this.state.output }</pre>
                </div>
                <hr />
                <button onClick={ this.mount.bind(this) }>Mount</button>
                <button onClick={ this.unmount.bind(this) }>UnMount</button>
                <div id="id_a"></div>
                <hr />
                <b></b>
                <button onClick={ this.change.bind(this) }>{ this.props.price }</button>
                <hr />
                <b></b>
                <div>
                    <input type="text" onChange={ this.search.bind(this) } placeholder="Search ..." />
                    <ol>
                        {/* { this.state.items.map( (item, index) => <li key={ item.id // index}>{ item.name }</li> )} */}
                        { newItems.map( item => <Person key={ item.id } person={ item } /> ) }
                    </ol>
                </div>
                <hr />
                <b>High Order Component(HOC)</b>
                <div>
                    <Btn>Btn component's children</Btn>
                    <hr />
                    {/* <Label>Label component's children</Label> */}
                    <LabelHOC>Label component's children</LabelHOC>
                </div>
                <hr />
                <b>Understand React.Children Utilities</b>
                <Parent>
                    <div className="child A">A</div>
                    <div className="child B">B</div>
                </Parent>
                <hr />
                <b>Use React.cloneElement to Extend Functionality of Children Component</b>
                <ExtendBtn>
                    <button value="A">A</button>
                    <button value="B">B</button>
                    <button value="C">C</button>
                    <button value="D">D</button>
                </ExtendBtn>
                <hr />
                <b>Write More Reusable React Components with Composable APIs</b>
                <SliderWrapper />
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            increase: nextProps.price > this.props.price
        })
    }

    /**
     * Here, it's simply returning a true or false. It's important to note that this doesn't prevent our state, 
     * and of course, not our props, from being updated. It simply prevents a rerender.
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.price % 5 === 0
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps.price: ${ prevProps.price }`)
    }
}

Wrapper.defaultProps = {
    price: 0
}

const Person = (props) => <li>({ props.person.id }) { props.person.name }</li>

/**
 * HOC:
 * The purpose of a higher order component is to share common functionality or information between multiple components.
 * The sole function of a higher order component is to take in a component and return a new component. 
 */
const HOC = (InnerComponent) => class extends React.Component {
    constructor() {
        super()
        this.state = { hocState: 0 }
    }
    
    updateHOCState() {
        this.setState(
            { hocState: this.state.hocState + 1 }
        )
    }
    componentWillMount() {
        console.log("HOC will mount!")
    }

    render() {
        return (
            <InnerComponent 
                { ...this.props }
                { ...this.state }
                HOCStateUpdate={ this.updateHOCState.bind(this) }
            />
        )
    }
}

// const Btn = (props) => <button>{ props.children }</button>
const Btn = HOC((props) => 
    <button onClick={ props.HOCStateUpdate } >{ props.children } - { props.hocState }</button>
)

class Label extends React.Component {
    componentWillMount() {
        console.log("Label component will mount!")
    }

    render() {
        return (
            <label onMouseOver={ this.props.HOCStateUpdate } >{ this.props.children } - { this.props.hocState }</label>
        )
    }
}

const LabelHOC = HOC(Label)

class Parent extends React.Component {
    render() {
        console.log(this.props.children)
        /**
         <Parent>
            <div className="child A">A</div>
            <div className="child B">B</div>
         </Parent>
            this.props.children: Array[2]
         <Parent>
            <div className="child A">A</div>
         </Parent>
            this.props.children: Object
         * Uncaught TypeError: this.props.children.map is not a function
         */
        // let items = this.props.children.map(child => child) 
        let items = React.Children.map(this.props.children, child => child)
        /**
         * In this particular case with mapping, and the fact that I'm simply returning the component, we can actually call react.children.2array, pass in our props.children. Sign out the items.
         */
        // let items = React.Children.toArray(this.props.children)
        // let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
        /**
         * React.Children.only expected to receive a single React element child.
         */
        // let items = React.Children.only(this.props.children)
        console.log(items)
        return null
    }
}

class ExtendBtn extends React.Component {
    constructor() {
        super()
        this.state = {
            selected: 'None'
        }
    }

    selectedItem(selected) {
        this.setState({ selected })
    }

    render() {
        /**
         * At this point, we might think we could do something like child.onClick equals, or whatever, 
         * but you can't actually do that, because props.children isn't the actual children. 
         * It's a descriptor of the children, you don't actually have anything to change. You can't change the props, 
         * you can't add any functionality, you can't do anything with it. You can only read from it.
         */
        // let items = this.props.children.map(child => child.onClick = function(){})
        let fn = child => React.cloneElement(child, {
            onClick: this.selectedItem.bind(this, child.props.value)
        })
        
        let items = React.Children.map(this.props.children, fn)

        return (
            <div>
                <h3>You have selected: { this.state.selected }</h3>
                { items }
            </div>
        )
    }
}

class SliderWrapper extends React.Component {
    constructor() {
        super()
        this.state = {
            red: 0
            // green: 0,
            // blue: 0
        }
    }

    revise(e) {
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
            // green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            // blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value

            // red: this.refs.red.refs.inp.value,
            // green: this.refs.green.refs.inp.value,
            // blue: this.refs.blue.refs.inp.value
        })
    }

    render() {
        return (
            <div>
                <SliderNumberInput
                    ref="red"
                    value={ +this.state.red }
                    min={ 0 }
                    max={ 255 }
                    step={ 1 }
                    label="Red"
                    // type="number"
                    revise={this.revise.bind(this)} />
                {/* { this.state.red } */}
                <br />
                {/* <Slider ref="green" revise={this.revise.bind(this)} value={ this.state.green } />
                { this.state.green }
                <br />
                <Slider ref="blue" revise={this.revise.bind(this)} value={ this.state.blue } />
                { this.state.blue }
                <br /> */}
            </div>
        )
    }
}

class SliderNumberInput extends React.Component {
    render() {
        let label = this.props.label !== '' ? 
            <label>{ this.props.label } - { this.props.value }</label> : ''
        return (
            <div>
                <input ref="inp"
                    // type="range" 
                    // min="0"
                    // max="255"
                    // value={ this.props.value }

                    type={ this.props.type }
                    min={ this.props.min }
                    max={ this.props.max }
                    step={ this.props.step }
                    defaultValue={ this.props.value }
                    
                    onChange={ this.props.revise } />
                    { label }
            </div>
        )
    }
}

SliderNumberInput.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    label: PropTypes.string,
    revise: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number', 'range']) 
}

SliderNumberInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    value: 0,
    label: '',
    type: 'range'
}

// export default Appwm;
export default Wrapper
