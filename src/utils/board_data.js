export const boards = [
  {
    name: 'board sample 01',
    created_at: '2021-01-01 21:19:18.207000 +00:00',
    lanes: [
      {
        id: 'lane1',
        title: 'Em Andamento',
        label: '1/4',
        cards: [
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a5',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Em Negociação',
        label: '1/4',
        cards: [
          {
            id: 'ffb2b280-fd34-11eb-b6ea-1f62b1704f8c',
            title: 'cliente11',
            description: ' - Demandas Espontaneas',
            label: '1DUV14',
          },
        ],
      },
      {
        id: 'lane3',
        title: 'Fechada',
        label: '1/4',
        cards: [
          {
            id: 'fe82b130-f906-11eb-98fb-f1b122b6a777',
            title: 'prspct0',
            description: 'alarme - Prospecao',
            label: '72UJ6K',
          },
        ],
      },
    ],
    handlers: {
      onCardClick: {
        workflow_name: 'listDocument',
        input: {
          document_id: 'id',
          endereco_id: 'data.cliente.data.endereco.id',
        },
      },
      onCardDelete: {
        workflow_name: 'removeDocument',
        input: {
          document_id: 'nano_id',
        },
      },
    },
  },
  {
    name: 'board sample 02',
    created_at: '2021-02-02 21:19:18.207000 +00:00',
    lanes: [
      {
        id: 'lane1',
        title: 'Em Andamento',
        label: '1/4',
        cards: [
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a6',
            title: 'Teste prospecto 2',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a7',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Em Negociação',
        label: '1/4',
        cards: [
          {
            id: 'ffb2b280-fd34-11eb-b6ea-1f62b1704f8c',
            title: 'cliente11',
            description: ' - Demandas Espontaneas',
            label: '1DUV14',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a8',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
      {
        id: 'lane3',
        title: 'Fechada',
        label: '1/4',
        cards: [
          {
            id: 'fe82b130-f906-11eb-98fb-f1b122b6a777',
            title: 'prspct0',
            description: 'alarme - Prospecao',
            label: '72UJ6K',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a9',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
    ],
    handlers: {
      onCardClick: {
        workflow_name: 'listDocument',
        input: {
          document_id: 'id',
          endereco_id: 'data.cliente.data.endereco.id',
        },
      },
      onCardDelete: {
        workflow_name: 'removeDocument',
        input: {
          document_id: 'nano_id',
        },
      },
    },
  },
  {
    name: 'board sample 03',
    created_at: '2021-03-03 21:19:18.207000 +00:00',
    lanes: [
      {
        id: 'lane1',
        title: 'Em Andamento',
        label: '1/4',
        cards: [
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a10',
            title: 'Teste prospecto 3',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a11',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a12',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
      {
        id: 'lane2',
        title: 'Em Negociação',
        label: '1/4',
        cards: [
          {
            id: 'ffb2b280-fd34-11eb-b6ea-1f62b1704f8c',
            title: 'cliente11',
            description: ' - Demandas Espontaneas',
            label: '1DUV14',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a13',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a14',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
      {
        id: 'lane3',
        title: 'Fechada',
        label: '1/4',
        cards: [
          {
            id: 'fe82b130-f906-11eb-98fb-f1b122b6a777',
            title: 'prspct0',
            description: 'alarme - Prospecao',
            label: '72UJ6K',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a15',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
          {
            id: 'feccebd0-fc83-11eb-a845-a1de4dbff1a16',
            title: 'Teste prospecto',
            description: 'alarme - Prospecao',
            label: 'EETYEJ',
          },
        ],
      },
    ],
    handlers: {
      onCardClick: {
        workflow_name: 'listDocument',
        input: {
          document_id: 'id',
          endereco_id: 'data.cliente.data.endereco.id',
        },
      },
      onCardDelete: {
        workflow_name: 'removeDocument',
        input: {
          document_id: 'nano_id',
        },
      },
    },
  },
];
