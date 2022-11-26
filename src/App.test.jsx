import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import {DecimaQuintaAula} from "./lessons/DecimaQuintaAula";

describe('DecimaQuintaAula component', () => {
    it('Should be render', () => {
        const { getByText } = render(<DecimaQuintaAula/>)
        expect(getByText('Cadastrar endereços'))
    })
})
