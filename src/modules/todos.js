/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 선언 */
let nextId = 1; // todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체 타입일 필요는 없다.
// 배열이어도 되고, 원시타입 이어도 상관 없다.
const initialState = [
    /* 다음과 같은 객체를 이 배열 안에 넣을 것이다.
    {
      id: 1,
      text: 'sample",
      done: false
    }
    */
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo =>
                    todo.id === action.id
                        ? { ...todo, done: !todo.done }
                        : todo
            );
        default:
            return state;
    }
}