import tw from 'tailwind-styled-components';

interface InputProps {
  type: string;
  placeholder: string;
}

const InputBox = tw.div`
w-full h-[100px] bg-[#444444] flex justify-center items-center
`;

export default function Input({ type, placeholder }: InputProps) {
  return (
    <InputBox>
      <input className="h-10 w-[50%]" type={type} placeholder={placeholder} />
    </InputBox>
  );
}
