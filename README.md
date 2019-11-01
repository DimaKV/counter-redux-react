## React with Redux

Простой счетчик, который реализован с помощью библиотек redux и react-redux

Реализация:
1) Пишим функцию `reducer`
2) Создаем `store` с помощью `createStore`
```js
const store = createStore(reducer);
```
3) Создаем `actionCreators`
```js
    const inc = () => {
        return ({type: 'INC'})
    };

    const dec = () => {
        return ({type: 'DEC'})
    };

    const rnd = () => {
        let num = Math.floor(Math.random()*10);
        return ({type: 'RND', playload: num})
    };

    export {
        inc,
        dec,
        rnd
    }
```
4) Создаем React компонент `Counter`
5) С помьщью `Provider` передаем store по дереву React
```js
    <Provider store={store}>
        <Counter/>
    </Provider> 
```
6) С помощью HOC `connect()(Counter)` получаем доступ к store в нужном компоненте `Counter`
7) Создаем функцию конфигурации, которая возвращает state. Эту функцию передаем в connect
```js
const mapStateToProps  = (state) => {
    return {
        counter: state
    }
}
connect(mapStateToProps)(Counter);
```
8) Используя паттерн, передаем в connect actions (объект, содержащий все actionCreators)
```js
    connect(mapStateToProps, actions)(Counter);
```

