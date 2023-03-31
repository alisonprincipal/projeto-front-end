import * as S from "./style";

interface iInputProps {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  nameError: string;
  msgerror?: string;
  defaultValue?: string;
}

function Input({
  label,
  type,
  placeholder,
  register,
  nameError,
  msgerror,
  defaultValue,
}: iInputProps) {
  return (
    <S.StyledFieldset>
      <div>
        <label>{label}</label>
        <S.Input
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          {...register(nameError)}
        />
        <span>{msgerror}</span>
      </div>
    </S.StyledFieldset>
  );
}
export { Input };
