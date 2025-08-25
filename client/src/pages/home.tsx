import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Carregar script do vturb-smartplayer
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/958d3e51-302a-4ad3-94a4-d981f2f38c3f/players/68ac63f6dc53cd15f0fe865c/v4/player.js";
    script.async = true;
    
    // Verificar se o script já não foi carregado
    const existingScript = document.querySelector(`script[src="${script.src}"]`);
    if (!existingScript) {
      document.head.appendChild(script);
    }

    // Cleanup ao desmontar componente
    return () => {
      const scriptToRemove = document.querySelector(`script[src="${script.src}"]`);
      if (scriptToRemove && document.head.contains(scriptToRemove)) {
        document.head.removeChild(scriptToRemove);
      }
    };
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
          <div className="text-[15px] text-[#222] leading-[1.6] mb-4" data-testid="content-article">
            Apenas <strong>8 mil vagas</strong> estão disponíveis para 2025; inscrições devem ser feitas <strong>exclusivamente pela internet</strong>
          </div>

          {/* Video Embed */}
          <div className="w-full max-w-[520px] mb-4 mx-auto">
            <div 
              dangerouslySetInnerHTML={{
                __html: '<vturb-smartplayer id="vid-68ac63f6dc53cd15f0fe865c" style="display: block; margin: 0 auto; width: 100%; height: auto;"></vturb-smartplayer>'
              }}
              data-testid="video-player"
            ></div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#888] mb-4 flex-wrap">
            <div className="mb-2 md:mb-0" data-testid="text-author-date">
              Redação SBT News |<br/>
              24/08/2025 às 14:01 - Atualizado em 25/08/2025 às 07h10
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
              O <strong>Exército Brasileiro</strong> anunciou nesta sexta-feira (22) a abertura de inscrições para novos <strong>Colecionadores, Atiradores Desportivos e Caçadores (CACs)</strong> em todo o país. A novidade deste ano é que o processo será realizado de forma <strong>totalmente digital</strong>, uma medida que visa modernizar e agilizar o cadastramento.
            </div>
            <div className="mb-4">
              O <strong>processo de inscrição</strong>, que antes exigia a presença física dos candidatos em unidades militares, agora poderá ser realizado <strong>inteiramente pela internet</strong>. "Esta mudança representa um <strong>avanço significativo</strong> em termos de eficiência e acessibilidade", afirmou a major Maria Santos, responsável pelo novo sistema digital.
            </div>
            <div className="mb-4">
              Entre as etapas do processo estão:
            </div>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">
                <strong>Preenchimento de formulário online</strong> com dados pessoais
              </li>
              <li className="mb-2">
                <strong>Upload de documentos digitalizados</strong>
              </li>
              <li className="mb-2">
                <strong>Avaliação psicológica virtual</strong>
              </li>
              <li className="mb-2">
                <strong>Teste teórico online</strong> sobre legislação e segurança
              </li>
            </ul>
            <div className="mb-4">
              O Exército garante que, apesar da digitalização, os <strong>critérios de segurança</strong> e rigor na seleção serão mantidos. "A tecnologia nos permite ser mais eficientes sem comprometer a <strong>qualidade do processo seletivo</strong>", ressaltou o coronel Silva.
            </div>
            <div className="mb-4">
              O <strong>prazo para inscrições</strong> vai de <strong>15 de julho a 15 de setembro de 2025</strong>. Os interessados devem acessar o <strong>site oficial do Exército no botão abaixo</strong> para mais informações e para realizar o cadastro.
            </div>

            <div className="flex justify-center my-6">
              <a className="bg-[#0a2344] hover:bg-[#163a6b] text-white font-bold px-8 py-3 rounded text-lg shadow transition duration-200 flex items-center space-x-2" href="https://exercito.acesso.inc" target="_blank" rel="noopener noreferrer" data-testid="button-cta-inscricao">
                <i className="fas fa-user-plus"></i>
                <span>
                  Realizar inscrição CAC
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
            <img alt="Foto de Alckmin em visita ao México, reunião com autoridades" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" src="https://www.infomoney.com.br/wp-content/uploads/2025/03/2025-03-06T225535Z_1_LYNXNPEL25111_RTROPTP_4_CLIMATE-COP29.jpg?quality=50&strip=all" data-testid="img-news-1"/>
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
            <img alt="Imagem de Lula discursando em evento político, fundo com bandeira do Brasil" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://assets.brasildefato.com.br/2024/09/image_processing20221116-25360-u8pj19.jpeg" width="80" data-testid="img-news-2"/>
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
            <img alt="Foto de policiais federais em operação, viaturas e agentes com coletes" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://www.cartacapital.com.br/wp-content/uploads/2025/04/64ba1d0f-c6f4-427a-bf0a-f565de996509.jpeg" width="80" data-testid="img-news-3"/>
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
            <img alt="Imagem de armas apreendidas em mesa, munições e acessórios ao redor" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://www.gov.br/pf/pt-br/assuntos/noticias/2025/02/pf-combate-seguranca-privada-clandestina/whatsapp-image-2024-10-27-at-13-13-55.jpeg/@@images/c5953820-6682-49c0-b2c5-847744f14586.jpeg" width="80" data-testid="img-news-4"/>
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
            <img alt="Foto de atirador esportivo em competição, alvo ao fundo" className="w-20 h-20 md:w-14 md:h-14 rounded object-cover" height="80" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXdhsaqshsPyCME_TAFXLDcCa68nJZ3bL7Kg&s" width="80" data-testid="img-news-5"/>
            <div>
              <div className="font-bold text-sm text-[#222] leading-tight" data-testid="text-news-title-5">
                Atiradores esportivos comentam novas regras para CACs
              </div>
              <div className="text-xs text-[#888]" data-testid="text-news-description-5">
                Mudanças impactam rotina de treinamentos e participação em campeonatos
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
