import React from "react";
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
    // useSelector 는 리덕스 스토어의 상태를 조회하는 Hook 이다.
    // state 의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일하다.

    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));

    /* 최적화 방법 1 */
    // useSelecor 를 여러 번 사용하는 방법
    // 해당 값 중 하나라도 바뀌었을 때에만 컴포넌트가 리렌더링 된다.
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);

    /* 최적화 방법 2 */
    // react-redux 의 shallowEqual 함수를 useSelector 의 두번째 인자로 전달
    // useSelector 의 두번째 파라미터인 equalityFn 은
    // 이전 값과 다음 값을 비교하여 true 가 나오면 리렌더링하지 않고 false 가 나오면 리렌더링을 함.
    const { number, diff } = useSelector(
        state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        shallowEqual
    );

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용할 수 있게 해주는 Hook이다.
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수를 만든다.
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;