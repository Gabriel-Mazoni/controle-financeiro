from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 


@app.post("/filtraData")
def filtrarData(dados: dict):
    datainicial = dados["dataInicial"]
    datafinal = dados["dataFinal"]

    '''resto funcao, retornando movimentacao'''


""" @app.post("/calcular")
def calcular(dados: dict):
    salario = dados["salario"]
    percentual = dados["percentual"]

    novo_salario = salario + (salario * percentual / 100)

    return {
        "novo_salario": novo_salario
    } """