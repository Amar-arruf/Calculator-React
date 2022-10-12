import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
  }
  .box-Container {
    color: ${({ theme }) => theme.textSecondary} !important;
  }

  .box-Container-Screen {
    background-color: ${({ theme }) => theme.screenBackground};
  }

  .box-Container-Screen > p {
    color: ${({ theme }) => theme.textSecondary};
  }

  .Toggle {
    background: ${({ theme }) => theme.toggleBackground} !important;
  }

  .ButtonboxCon {
    background-color: ${({ theme }) => theme.toggleBackground}
  }

  button {
    color : ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.secondaryKeyBackground};
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.secondaryKeyShadow};
  }

  button:hover {
    background-color: ${({ theme }) => theme.accentKey3};
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.secondaryKeyShadow};
  }

  .remove {
    background-color: ${({ theme }) => theme.keyBackground};
    box-shadow : 0 3px 0 0 ${({ theme }) => theme.keyShadow};
  }

  .remove:hover {
    background-color: ${({ theme }) => theme.accentKey};
    box-shadow : 0 3px 0 0 ${({ theme }) => theme.keyShadow};
  }

  .equals {
    background-color: ${({ theme }) => theme.primaryKeyBackground};
    box-shadow: 0 3px 0 0 ${({ theme }) => theme.primaryKeyShadow};
  }

  .equals:hover {
    background-color: ${({ theme }) => theme.accentKey2} ;
    box-shadow : 0 3px 0 0 ${({ theme }) => theme.keyShadow};
  }


`;
