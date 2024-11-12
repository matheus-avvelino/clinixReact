/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarEndereco } from "../store/slices/viaCep/actions";

const FormEndereco = ({ onEnderecoChange,pacienteEndereco }) => {
  const endereco = pacienteEndereco;
  console.log(endereco)
  // Inicializa o estado com os valores do endereço passado
  const [cep, setCep] = useState(endereco?.cep || ""); 
  const [form, setForm] = useState({
    cep: endereco?.cep || "",
    logradouro: endereco?.logradouro || "",
    complemento: endereco?.complemento || "",
    bairro: endereco?.bairro || "",
    cidade: endereco?.cidade || "",
    uf: endereco?.uf || "",
  });

  const dispatch = useDispatch();

  // Obtendo o estado do Redux
  const { endereco: enderecoRedux, erro, status } = useSelector((state) => state.viaCep);


  useEffect(() => {
    // Atualiza o estado sempre que 'pacienteEndereco' mudar
    if (endereco) {
      setForm({
        cep: endereco?.cep || "",
        logradouro: endereco?.logradouro || "",
        complemento: endereco?.complemento || "",
        bairro: endereco?.bairro || "",
        cidade: endereco?.cidade || "",
        uf: endereco?.uf || "",
      });
    }
  }, [endereco]);



  useEffect(() => {
    if (enderecoRedux) {
      const novoEndereco = {
        cep: enderecoRedux.cep,
        logradouro: enderecoRedux.logradouro,
        complemento: enderecoRedux.complemento,
        bairro: enderecoRedux.bairro,
        cidade: enderecoRedux.localidade,
        uf: enderecoRedux.uf,
      };
      setForm(novoEndereco); // Atualiza o estado no componente pai
      onEnderecoChange(novoEndereco);
    }
  }, [enderecoRedux]);

  useEffect(() => {
    // Limpa os campos do formulário quando o CEP estiver vazio
    if (cep === "") {
      setForm({
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        cidade: "",
        uf: "",
      }); // Passa um objeto vazio para o componente pai
      onEnderecoChange({});
    }
  }, [cep]);

  const handleCepBlur = () => {
    if (cep.length === 9) { // Verifica se o CEP tem o formato correto
      dispatch(buscarEndereco(cep.replace("-", ""))); // Dispara a ação para buscar o endereço, sem o traço
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const novoForm = { ...form, [name]: value };
    setForm(novoForm); // Atualiza o estado no componente pai
    onEnderecoChange(novoForm);
  };

  const handleCepChange = (e) => {
    let value = e.target.value;
    // Remove caracteres não numéricos
    value = value.replace(/\D/g, "");

    // Se o valor tiver mais de 5 caracteres e não tiver o traço, adiciona o traço
    if (value.length > 5 && !value.includes("-")) {
      value = value.replace(/(\d{5})(\d{3})/, "$1-$2"); // Adiciona o traço no formato
    }

    // Atualiza o estado do CEP
    setCep(value);
  };

  return (
    <div className="max-w-md mx-auto">
      {JSON.stringify(form)}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="cep"
          value={cep || ""}
          onChange={handleCepChange} // Atualiza o CEP com máscara
          onBlur={handleCepBlur} // Chama a função para buscar o endereço ao perder o foco
          maxLength={9} // Limita o CEP para 10 caracteres (com o traço)
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          CEP
        </label>
      </div>

      {status === "loading" && <p>Buscando...</p>} {/* Exibe mensagem de carregamento */}
      {erro && <p style={{ color: "red" }}>{erro}</p>} {/* Exibe erro, se houver */}

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="logradouro"
          value={(form.logradouro + " " + form.complemento)  || ""}
          onChange={handleChange} // Atualiza o campo de logradouro
          readOnly
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Logradouro
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="bairro"
          value={form.bairro || ""}
          onChange={handleChange} // Atualiza o campo de bairro
          readOnly
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Bairro
        </label>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="cidade"
            value={form.cidade || ""}
            onChange={handleChange} // Atualiza o campo de cidade
            readOnly
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Cidade
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="uf"
            value={form.uf || ""}
            onChange={handleChange} // Atualiza o campo de UF
            readOnly
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            UF
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormEndereco;
