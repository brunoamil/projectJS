// todos os parametros usando ... rest operation, cai como array.
class Bind {
    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(model, props, model => 
          view.update(model));

          view.update(model);

          return proxy;
    }
}