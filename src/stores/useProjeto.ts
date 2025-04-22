import api from "@/services/api";
import Projeto from "@/types/Projeto";
import { create } from "zustand";


interface ShowProjetos {
    projetos: Projeto[]
    getProjetos: () => Promise<void>
    filterByTecnology: (tecnology: string) => Promise<void>
}


const useProjeto = create<ShowProjetos>((set) => ({
    projetos: [],
    getProjetos: async () => {
        try {
            const response = await api.get("/projetos")
            console.log("cheguei aqui")
            set({ projetos: Array.isArray(response.data) ? response.data : [] })
            console.log("getProjetos: ",response.data)
        } catch (error) {
            console.error("Erro ao buscar os projetos:", error)
        }
    },
    filterByTecnology: async (tecnology: string) =>   {
        try {
            const response = await api.get("/projetos")
            const todosProjetos = Array.isArray(response.data)? response.data: []

            const filtrados = todosProjetos.filter((projeto: Projeto) => projeto.tecnology === tecnology)
            console.log("filtrados no zustand", filtrados)
            set({ projetos: filtrados })
        } catch (error) {
            console.error("Erro ao buscar os projetos:", error)
            set({ projetos: []})
        }
    }
}));
  
export default useProjeto