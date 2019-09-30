import React, { useState, Component, useEffect } from 'react';

// class Hooks extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight,
//       },
//     };
//   }
//   onResize = () => {
//     this.setState({
//       size: {
//         width: document.documentElement.clientWidth,
//         height: document.documentElement.clientHeight,
//       },
//     });
//   };
//   componentDidMount() {
//     document.title = this.state.count;
//     window.addEventListener('resize', this.onResize, false);
//   }
//   componentDidUpdate() {
//     document.title = this.state.count;
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize, false);
//   }
//   render() {
//     const { count, size } = this.state;
//     return (
//       <div>
//         <button
//           type="button"
//           onClick={() =>
//             this.setState({
//               count: count + 1,
//             })
//           }
//         >
//           click
//         </button>
//         <p>{count}</p>
//         <p>
//           size: {size.width} x {size.height}
//         </p>
//       </div>
//     );
//   }
// }

function Hooks(props) {
  const [count, setCount] = useState(() => {
    return props.defaultCount + 1 || 0;
  });
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  };
  useEffect(() => {
    console.log('count', count);
  }, [count]);
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    //回调函数在视图被销毁之前触发，一是重新渲染，二是卸载
    return () => {
      console.log('调用');
      window.removeEventListener('resize', onResize, false);
    };
  }, []); // 第二个参数是一个数组，只有数组的每一项都不变的情况下，才不会执行
  useEffect(() => {
    document.title = count;
  });
  const onClick = () => {
    console.log('click');
  };
  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false);
  }, [count]);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        click
      </button>
      {count % 2 ? (
        <span id="size">
          size: {size.width} x {size.height}
        </span>
      ) : (
        <p id="size">
          size: {size.width} x {size.height}
        </p>
      )}
      <p>{count}</p>
    </div>
  );
}

export default Hooks;
