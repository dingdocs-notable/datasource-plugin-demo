import { useEffect, useState } from 'react';
import { initView } from 'dingtalk-docs-cool-app';

function App() {
  const [value, setValue] = useState('someValue');

  useEffect(() => {
    initView({
      onReady: () => {
      },
      onError: (e) => {
        console.log(e);
      },
    });
  }, []);

  const goNext = async () => {
    const config = { a: 'test' };
    await (Dingdocs.base.host as any).saveConfigAndGoNext(config);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>数据源插件demo</h1>
      <div style={{display: 'flex'}}>
        <label>输入框:</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <button style={{marginTop: 20, maxWidth: 100}} onClick={goNext}>点击下一步</button>
    </div>
  )
}

export default App;
