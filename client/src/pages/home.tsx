import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Video player placeholder script
    const playerElement = document.getElementById('vid-68ac63f6dc53cd15f0fe865c');
    if (playerElement) {
      playerElement.innerHTML = `
        <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; border-radius: 8px;">
          <div style="text-align: center; color: white;">
            <i class="fas fa-play-circle" style="font-size: 48px; margin-bottom: 10px;"></i>
            <div style="font-size: 14px; font-weight: bold;">Video Player</div>
            <div style="font-size: 12px; opacity: 0.8;">Content loading...</div>
          </div>
        </div>
      `;
    }
  }, []);

  return (
    <div className="bg-[#fff] min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0a2344] w-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-2">
          <button className="text-white text-lg" data-testid="button-menu">
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex-1 flex justify-center">
            <img alt="SBT News logo" className="h-8" src="https://i.ibb.co/xKkk0c6M/IMG-6579.jpg" data-testid="img-logo"/>
          </div>
          <button className="text-white text-lg" data-testid="button-search">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="flex justify-start space-x-2 pb-2 px-4 overflow-x-auto custom-scrollbar">
          <button className="bg-[#0a2344] text-white text-xs px-2 py-1 rounded border border-[#3b4a5a] whitespace-nowrap" data-testid="button-category-videos">
            Vídeos
          </button>
          <button className="bg-[#0a2344] text-white text-xs px-2 py-1 rounded border border-[#3b4a5a] whitespace-nowrap" data-testid="button-category-brasil">
            Brasil
          </button>
          <button className="bg-[#0a2344] text-white text-xs px-2 py-1 rounded border border-[#3b4a5a] whitespace-nowrap" data-testid="button-category-politica">
            Política
          </button>
          <button className="bg-[#0a2344] text-white text-xs px-2 py-1 rounded border border-[#3b4a5a] whitespace-nowrap" data-testid="button-category-economia">
            Economia
          </button>
          <button className="bg-[#0a2344] text-white text-xs px-2 py-1 rounded border border-[#3b4a5a] whitespace-nowrap" data-testid="button-category-mundo">
            Mundo
          </button>
          <button className="bg-[#0a2344] text-white text-xs px-2 py-1 rounded border border-[#3b4a5a] whitespace-nowrap" data-testid="button-category-saude">
            Saúde
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 w-full max-w-[900px] mx-auto mt-4 mb-8 px-4">
        {/* Article */}
        <div className="flex-1">
          <div className="text-xs text-[#888] mb-2" data-testid="text-category">
            Brasil
          </div>
          <h1 className="text-2xl md:text-[1.6rem] font-bold text-[#222] leading-tight mb-2" data-testid="text-title">
            Exército abre inscrições para novos CACs com processo 100% digital
          </h1>
          <div className="text-xs text-[#888] mb-4" data-testid="text-subtitle">
            Apenas 8 mil vagas estão disponíveis para 2025; inscrições devem ser feitas exclusivamente pela internet
          </div>

          {/* Video Embed */}
          <div className="w-full max-w-[520px] h-[220px] rounded-lg flex flex-col items-center justify-center mb-2 relative overflow-hidden mx-auto">
            <div id="vid-68ac63f6dc53cd15f0fe865c" style={{display: 'block', margin: '0 auto', width: '100%'}} data-testid="video-player"></div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#888] mb-4 flex-wrap">
            <div className="mb-2 md:mb-0" data-testid="text-author-date">
              Redação SBT News |<br/>
              01/07/2025 às 14:01 - Atualizado em 01/07/2025 às 21h10
            </div>
            <div className="flex space-x-3">
              <a className="text-[#222] hover:text-[#0a2344]" href="#" data-testid="link-share-facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-[#222] hover:text-[#0a2344]" href="#" data-testid="link-share-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-[#222] hover:text-[#0a2344]" href="#" data-testid="link-share-whatsapp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a className="text-[#222] hover:text-[#0a2344]" href="#" data-testid="link-share-linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-[#222] hover:text-[#0a2344]" href="#" data-testid="link-share-link">
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>

          {/* Article Body */}
          <div className="text-[15px] text-[#222] leading-[1.6]" data-testid="content-article">
            <div className="mb-4">
              O Exército Brasileiro anunciou nesta terça-feira (1) a abertura de inscrições para novos Colecionadores, Atiradores Desportivos e Caçadores (CACs) em todo o país. A novidade deste ano é que o processo será realizado de forma totalmente digital, uma medida que visa modernizar e agilizar o cadastramento.
            </div>
            <div className="mb-4">
              De acordo com o comunicado oficial, serão disponibilizadas apenas 8 mil vagas para o ano de 2025, o que deve acirrar a concorrência entre os interessados. O coronel João Silva, porta-voz do Exército, ressaltou a importância dessa limitação: "Estabelecemos esse número para garantir um controle efetivo e um acompanhamento adequado dos novos CACs".
            </div>
            <div className="mb-4">
              O processo de inscrição, que antes exigia a presença física dos candidatos em unidades militares, agora poderá ser realizado inteiramente pela internet. "Esta mudança representa um avanço significativo em termos de eficiência e acessibilidade", afirmou a major Maria Santos, responsável pelo novo sistema digital.
            </div>
            <div className="mb-4">
              Entre as etapas do processo estão:
            </div>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">
                Preenchimento de formulário online com dados pessoais
              </li>
              <li className="mb-2">
                Upload de documentos digitalizados
              </li>
              <li className="mb-2">
                Avaliação psicológica virtual
              </li>
              <li className="mb-2">
                Teste teórico online sobre legislação e segurança
              </li>
            </ul>
            <div className="mb-4">
              O Exército garante que, apesar da digitalização, os critérios de segurança e rigor na seleção serão mantidos. "A tecnologia nos permite ser mais eficientes sem comprometer a qualidade do processo seletivo", ressaltou o coronel Silva.
            </div>
            <div className="mb-4">
              A medida tem gerado reações diversas. Associações de atiradores esportivos celebraram a modernização, enquanto grupos de controle de armas expressaram preocupação com a possível facilitação do acesso.
            </div>
            <div className="mb-4">
              O prazo para inscrições vai de 15 de julho a 15 de agosto de 2025. Os interessados devem acessar o site oficial do Exército para mais informações e para realizar o cadastro.
            </div>
            <div className="mb-4">
              Com a alta demanda esperada e o número limitado de vagas, as autoridades recomendam que os interessados não deixem para a última hora. "As inscrições serão encerradas assim que atingirmos o limite de 8 mil candidatos aprovados", alertou a major Santos.
            </div>
            <div className="flex justify-center my-6">
              <a className="bg-[#0a2344] hover:bg-[#163a6b] text-white font-bold px-8 py-3 rounded-full text-lg shadow transition duration-200 flex items-center space-x-2" href="#" data-testid="button-cta-inscricao">
                <i className="fas fa-user-plus"></i>
                <span>
                  Acesse o site oficial para inscrição
                </span>
              </a>
            </div>
            <div className="mb-4 text-center text-[#888] text-sm" data-testid="text-footer-note">
              O SBT News continuará acompanhando o desenrolar desse processo e trará atualizações conforme novas informações forem divulgadas pelo Exército Brasileiro.
            </div>
          </div>
        </div>
      </div>

      {/* Assuntos relacionados (Mobile) */}
      <div className="w-full px-4 mb-8 lg:hidden">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="font-bold text-[#222] text-sm mb-2" data-testid="text-related-topics-title">
            Assuntos relacionados
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#e5e7eb] text-[#222] text-xs px-2 py-1 rounded" data-testid="button-topic-exercito">
              Exército
            </button>
            <button className="bg-[#e5e7eb] text-[#222] text-xs px-2 py-1 rounded" data-testid="button-topic-cac">
              CAC
            </button>
            <button className="bg-[#e5e7eb] text-[#222] text-xs px-2 py-1 rounded" data-testid="button-topic-processo">
              Processo Digital
            </button>
            <button className="bg-[#e5e7eb] text-[#222] text-xs px-2 py-1 rounded" data-testid="button-topic-inscricoes">
              Inscrições 2025
            </button>
          </div>
        </div>
      </div>

      {/* Últimas Notícias */}
      <div className="w-full max-w-[900px] mx-auto px-4 mb-8">
        <div className="font-bold text-[#222] text-lg mb-2" data-testid="text-latest-news-title">
          Últimas Notícias
        </div>
        <div className="flex flex-col space-y-3">
          {/* News item 1 */}
          <div className="flex items-start space-x-2" data-testid="news-item-1">
            <img alt="Foto de Alckmin em visita ao México, reunião com autoridades" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" src="https://replicate.delivery/xezq/QDSaJapxQgaIDpRfvANKe9EfpmnvdqrLTUuZ5vDKMYSpUCdqA/out-0.png" data-testid="img-news-1"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-1">
                Alckmin visita o México para ampliar relações comerciais em meio ao tarifação dos EUA
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-1">
                Representantes também compõem comitiva; presidente Claudia Sheinbaum deve receber autoridades brasileiras
              </div>
            </div>
          </div>

          {/* News item 2 */}
          <div className="flex items-start space-x-2" data-testid="news-item-2">
            <img alt="Imagem de Lula discursando em evento político, fundo com bandeira do Brasil" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/K2gTxoYXxK6sCZ9FfalABOGWlbUQ3R9bcbuhkYqi8r67rQnKA/out-0.png" width="80" data-testid="img-news-2"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-2">
                Lula defende maior controle de armas em novo pronunciamento
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-2">
                Presidente reforça importância de políticas públicas para segurança e controle de armamentos
              </div>
            </div>
          </div>

          {/* News item 3 */}
          <div className="flex items-start space-x-2" data-testid="news-item-3">
            <img alt="Foto de policiais federais em operação, viaturas e agentes com coletes" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/Z8kSroLznH6UCp0XpgfWztVkd7X2RyMzzf8tZocCsik3XhOVA/out-0.png" width="80" data-testid="img-news-3"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-3">
                Polícia Federal realiza operação contra tráfico de armas em três estados
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-3">
                Ação resultou em prisões e apreensão de armamento ilegal em São Paulo, Rio e Minas Gerais
              </div>
            </div>
          </div>

          {/* News item 4 */}
          <div className="flex items-start space-x-2" data-testid="news-item-4">
            <img alt="Imagem de armas apreendidas em mesa, munições e acessórios ao redor" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/5L7ZO9uqKFYBId9S0gww5W61fUfQTWEFDMMtaTvuinJ3XhOVA/out-0.png" width="80" data-testid="img-news-4"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-4">
                Exército divulga balanço de armas apreendidas no primeiro semestre
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-4">
                Relatório aponta aumento de apreensões após mudanças na legislação
              </div>
            </div>
          </div>

          {/* News item 5 */}
          <div className="flex items-start space-x-2" data-testid="news-item-5">
            <img alt="Foto de atirador esportivo em competição, alvo ao fundo" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/siEmmbAyWVY3MFfnjZcueScXewOFLPnWdagCwAPNuSfdfK0pC/out-0.png" width="80" data-testid="img-news-5"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-5">
                Atiradores esportivos comentam novas regras para CACs
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-5">
                Mudanças impactam rotina de treinamentos e participação em campeonatos
              </div>
            </div>
          </div>

          {/* News item 6 */}
          <div className="flex items-start space-x-2" data-testid="news-item-6">
            <img alt="Imagem de reunião entre autoridades da Polícia Federal e Exército, mesa de negociações" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/LfoiqEHosnxIayzTq26Y2DkMZ6TEhfkutyvBbmhe9U0vvCdqA/out-0.png" width="80" data-testid="img-news-6"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-6">
                PF e Exército alinham transição de fiscalização dos CACs
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-6">
                Encontro definiu etapas para transferência de responsabilidades
              </div>
            </div>
          </div>

          {/* News item 7 */}
          <div className="flex items-start space-x-2" data-testid="news-item-7">
            <img alt="Foto de caçador em floresta, vestindo roupas camufladas e segurando rifle" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/w01lk4eeuHhlXEgMwZdEGYRv7fJbkkddrtkE9gC2SL8uvCdqA/out-0.png" width="80" data-testid="img-news-7"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-7">
                Caçadores relatam dificuldades com novas exigências da PF
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-7">
                Documentação e fiscalização mais rigorosa preocupam praticantes
              </div>
            </div>
          </div>

          {/* News item 8 */}
          <div className="flex items-start space-x-2" data-testid="news-item-8">
            <img alt="Imagem de munições e acessórios de armas em bancada de loja" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/17OXR2xZ1RaWIxdST8BB7cIkxre2isUZoew7AwtWsYevvCdqA/out-0.png" width="80" data-testid="img-news-8"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-8">
                Lojas de armas se adaptam a novas regras de comercialização
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-8">
                Empresários investem em treinamento e atualização de sistemas
              </div>
            </div>
          </div>

          {/* News item 9 */}
          <div className="flex items-start space-x-2" data-testid="news-item-9">
            <img alt="Foto de manifestantes segurando cartazes contra armas, protesto em rua" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/ZSeUtD8miHRRYiylXxcK1wvLeXc5gif3X9c5HD9AGhTuvCdqA/out-0.png" width="80" data-testid="img-news-9"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-9">
                Protestos marcam debate sobre controle de armas no Congresso
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-9">
                Grupos favoráveis e contrários às mudanças se manifestam em Brasília
              </div>
            </div>
          </div>

          {/* News item 10 */}
          <div className="flex items-start space-x-2" data-testid="news-item-10">
            <img alt="Imagem de policial federal analisando documentos em escritório" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/0OqaK5tiEfRefpkvWowwy7wGq3TMTzvX7QHgbG1vREvuvCdqA/out-0.png" width="80" data-testid="img-news-10"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-10">
                PF lança portal para facilitar acesso de CACs a serviços
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-10">
                Plataforma digital promete agilizar processos e reduzir filas
              </div>
            </div>
          </div>

          {/* News item 11 */}
          <div className="flex items-start space-x-2" data-testid="news-item-11">
            <img alt="Foto de policial federal em frente a delegacia, viatura ao fundo" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/48uMogpiSUbGNpks82efROCrUYUX3GpPeNVF8D45Xx5uvCdqA/out-0.png" width="80" data-testid="img-news-11"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-11">
                Delegacias da PF recebem reforço para atender demanda de CACs
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-11">
                Novos servidores e treinamento específico para atendimento especializado
              </div>
            </div>
          </div>

          {/* News item 12 */}
          <div className="flex items-start space-x-2" data-testid="news-item-12">
            <img alt="Imagem de armas e munições em laboratório de perícia" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/C9d4ZqMmkP5bMZKfj6pLYoVtosqdwq5SB6eFJqT2ZV43XhOVA/out-0.png" width="80" data-testid="img-news-12"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-12">
                Peritos analisam impacto das novas regras para armas de fogo
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-12">
                Especialistas apontam avanços e desafios na fiscalização
              </div>
            </div>
          </div>

          {/* News item 13 */}
          <div className="flex items-start space-x-2" data-testid="news-item-13">
            <img alt="Foto de atirador esportivo em estande de tiro, alvo à frente" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/2QInmisaeFXrO6oaVStfhieBf2f6bhGwOyvyRPqPhTT5eVoTF/out-0.png" width="80" data-testid="img-news-13"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-13">
                Estandes de tiro registram aumento na procura após mudanças
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-13">
                Praticantes buscam regularização e treinamentos para se adequar às normas
              </div>
            </div>
          </div>

          {/* News item 14 */}
          <div className="flex items-start space-x-2" data-testid="news-item-14">
            <img alt="Imagem de reunião de comissão no Congresso, deputados debatendo" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/aCqlGJuoPe0gWSUAMqA1qEu5lc85M6a5DVaUWCBejAj3XhOVA/out-0.png" width="80" data-testid="img-news-14"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-14">
                Comissão do Congresso aprova relatório sobre controle de armas
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-14">
                Texto segue para votação em plenário nas próximas semanas
              </div>
            </div>
          </div>

          {/* News item 15 */}
          <div className="flex items-start space-x-2" data-testid="news-item-15">
            <img alt="Foto de policial federal em treinamento, campo de tiro ao ar livre" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://replicate.delivery/xezq/jQKt0b11hGYfZi6XfLUgcqMjgWSZ9aoaqiLQtZ6uJfSuvCdqA/out-0.png" width="80" data-testid="img-news-15"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-15">
                Polícia Federal intensifica treinamentos para fiscalização de CACs
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-15">
                Novos protocolos e cursos para agentes em todo o país
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a2344] w-full py-4 mt-auto">
        <div className="max-w-[900px] mx-auto flex flex-col items-center px-4 space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex items-center space-x-2">
            <img alt="SBT News logo" className="h-8" src="https://i.ibb.co/xKkk0c6M/IMG-6579.jpg" data-testid="img-footer-logo"/>
            <span className="text-white text-xs" data-testid="text-advertise">
              Anuncie no SBT
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 text-xs text-white text-center">
            <a className="hover:underline" href="#" data-testid="link-privacy">
              Política de privacidade
            </a>
            <a className="hover:underline" href="#" data-testid="link-terms">
              Termo de uso
            </a>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 text-xs text-white text-center">
            <span data-testid="text-copyright">
              SBT Copyright © 2025
            </span>
            <span data-testid="text-rights">
              Todos os direitos reservados
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a className="text-white" href="#" data-testid="link-footer-facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-white" href="#" data-testid="link-footer-twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white" href="#" data-testid="link-footer-instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white" href="#" data-testid="link-footer-linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
