import { useEffect, useState } from 'react';
import { initView } from 'dingtalk-docs-cool-app';

function App() {
  const [grade, setGrade] = useState('0');
  const [gender, setGender] = useState('0');

  useEffect(() => {
    initView({
      onReady: () => {},
      onError: e => {
        console.log(e);
      }
    });
  }, []);

  const goNext = async () => {
    const config = {
      grade,
      gender
    };
    await (Dingdocs.base.host as any).saveConfigAndGoNext(config);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>班级成员信息同步</h1>

      {/* 年级选择 */}
      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', width: '300px' }}>
        <label style={{ width: '80px' }}>年级:</label>
        <select value={grade} onChange={e => setGrade(e.target.value)} style={{ flex: 1, padding: '5px' }}>
          <option value="0">全部</option>
          <option value="1">一年级</option>
          <option value="2">二年级</option>
          <option value="3">三年级</option>
          <option value="4">四年级</option>
          <option value="5">五年级</option>
          <option value="6">六年级</option>
        </select>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', width: '300px' }}>
        <label style={{ width: '80px' }}>性别:</label>
        <div style={{ display: 'flex', gap: '15px' }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="0"
              checked={gender === '0'}
              onChange={e => setGender(e.target.value)}
            />
            全部
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="1"
              checked={gender === '1'}
              onChange={e => setGender(e.target.value)}
            />
            男
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="2"
              checked={gender === '2'}
              onChange={e => setGender(e.target.value)}
            />
            女
          </label>
        </div>
      </div>

      <button
        style={{
          marginTop: 20,
          padding: '10px 20px',
          backgroundColor: '#1890ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={goNext}
      >
        点击下一步
      </button>
    </div>
  );
}

export default App;
