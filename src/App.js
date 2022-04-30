import React from 'react';
import Select from './Form/Select';
import Input from './Form/Input';
import Radios from './Form/Radios';
import Checkbox from './Form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [frutas, setFrutas] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);


  return (
    <form>
      <h2>Termos</h2>
      <Checkbox options={['Li e aceitos os termos']} value={termos} setValue={setTermos}/>

      <h2>CheckBox</h2>
      <Checkbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens}/>
      <h2>Cores</h2>
      <Radios options={['Azul', 'Vermelho']} value={cor} setValue={setCor}/>
      <h2>Frutas</h2>
      <Radios options={['Laranja', 'Limão', 'Uva']} value={frutas} setValue={setFrutas}/>
      <h2>Itens</h2>
      <Select options={['Smartphone', 'Tablet', 'Notebook']} value={produto} setValue={setProduto}/>
      <Input id="nome" label="Nome" value={nome} setValue={setNome}/>
      <Input id="email" label="Email" value={email} setValue={setEmail}/>
      <button>Enviar</button>
    </form>
  );
};

export default App;
