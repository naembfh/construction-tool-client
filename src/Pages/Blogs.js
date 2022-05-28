import React from 'react';

const Blogs = () => {
    return (
        <div className='m-4'>
            <div className='m-2'><h1>1. How will you improve the performance of a React Application?</h1>
            <p>First of all have to understand how React dom operation working and update to ui.There are some ways we can optimize the performance</p>
            <p>1.Keeping component state local where necessary.
            </p>
            <p>2.Lazy loading images in React</p>
            <p>3.Memoizing React components to prevent unnecessary re-renders.
            </p></div>
           <div className="m-2">
           <h1>2. What are the different ways to manage a state in a React application?</h1>
            <p>There are other types of application state in React ,Such as  Communication State,Data State,Control State,Session State.</p>
            <h1>How does prototypical inheritance work?</h1>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
           </div>
           <div className="m-2">
           <h1>3. What is a unit test? Why should write unit tests?</h1>
            <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. <br /> Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
           </div>
           <div className='m-2'>
           <h1>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <p>One should never set the state directly because of the following reasons:
                <p>1.If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                <p>2.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                <p>3.You will lose control of the state across all components.</p>
                <br /> The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.</p>
            <div className='m-2'>
            <h1>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <img src="https://i.ibb.co/dgNbLVj/Screenshot-10.png" alt="" srcset="" />
            </div>
           </div>
        </div>
    );
};

export default Blogs;