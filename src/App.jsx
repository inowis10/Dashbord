import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  ShieldCheck,
  Activity,
  TrendingUp,
  Database,
  Cpu,
  Globe,
  Layers,
  Lock,
  Zap,
  BarChart3,
  Smartphone,
  Layout,
  ExternalLink,
  Users,
  MessageCircle,
  CheckCircle2,
  FileText,
  ShieldAlert,
  Table,
  Bot,
  X,
  Send,
  Check,
  Star,
  Server,
  Briefcase,
  Play,
  Film,
  Linkedin,
  Instagram,
  Mail
} from 'lucide-react';
import './index.css';

const GlassCard = ({ title, value, desc, icon: Icon, type, delay, category, tags = [] }) => {
  return (
    <motion.div
      className={`glass-card ${type || ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.2, 1, 0.2, 1]
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="card-header">
        <div className="card-icon">
          <Icon size={20} />
        </div>
        {type === 'security' ? (
          <div className="security-badge">
            <ShieldCheck size={12} />
            <span>PROTEGIDO</span>
          </div>
        ) : (
          <div className="status-dot"></div>
        )}
      </div>

      <div>
        <div className="card-label">{category}</div>
        <h3 className="card-title">{title}</h3>
        <div className="card-value">{value}</div>
      </div>

      <p className="card-desc">{desc}</p>

      <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

const ImageModal = ({ isOpen, image, title, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>{title}</h3>
              <button className="modal-close" onClick={onClose}>×</button>
            </div>
            <div className="modal-image-container">
              <img src={image} alt={title} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StoryItem = ({ index, title, desc, image, delay, onOpen }) => {
  return (
    <motion.div
      className="story-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      style={{ perspective: 1000, cursor: 'pointer' }}
      onClick={() => onOpen(image, title)}
    >
      <div className="story-window-header">
        <div className="story-dot"></div>
        <div className="story-dot"></div>
        <div className="story-dot"></div>
      </div>
      <div className="story-image-container">
        <div className="story-number">Paso {index}</div>
        <img
          src={image}
          alt={title}
          className="story-image"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x600/0f172a/38bdf8?text=Esperando+Imagen+' + index;
          }}
        />
      </div>
      <div className="story-info">
        <h4 className="story-title">{title}</h4>
        <p className="story-desc">{desc}</p>
      </div>
    </motion.div>
  );
};

const TypingIndicator = () => (
  <div className="typing-indicator">
    <div className="typing-dot"></div>
    <div className="typing-dot"></div>
    <div className="typing-dot"></div>
  </div>
);

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleChat = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsTyping(true);
      setShowMessage(false);
      setTimeout(() => {
        setIsTyping(false);
        setShowMessage(true);
      }, 1500);
    } else {
      setIsOpen(false);
      // Reset states when closing
      setTimeout(() => {
        setIsTyping(false);
        setShowMessage(false);
      }, 300);
    }
  };

  const handleAction = (message) => {
    const phone = "56950901683"; // Número actualizado
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="whatsapp-widget-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="chat-header">
              <div className="chat-avatar">
                <Bot size={24} />
              </div>
              <div className="chat-info">
                <h4>Soporte Premium</h4>
                <p>En línea ahora</p>
              </div>
              <button className="chat-close" onClick={toggleChat}>
                <X size={20} />
              </button>
            </div>

            <div className="chat-body">
              <AnimatePresence mode="wait">
                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="chat-bubble"
                    style={{ width: 'fit-content' }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}

                {showMessage && (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="chat-content"
                  >
                    <div className="chat-bubble" style={{ marginBottom: '1rem' }}>
                      ¡Hola! 👋 ¿En qué podemos ayudarte hoy para potenciar tu negocio?
                    </div>

                    <div className="chat-actions">
                      <motion.button
                        className="action-btn"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        onClick={() => handleAction("Hola, quiero cotizar un proyecto similar.")}
                      >
                        Quiero cotizar un proyecto
                        <Send size={16} />
                      </motion.button>
                      <motion.button
                        className="action-btn"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => handleAction("Hola, tengo una duda sobre sus servicios.")}
                      >
                        Tengo una duda
                        <MessageCircle size={16} />
                      </motion.button>
                      <motion.button
                        className="action-btn"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => handleAction("Hola, quiero ver más ejemplos.")}
                      >
                        Ver más ejemplos
                        <ExternalLink size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="whatsapp-trigger"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} fill="white" />
        <span className="pulse-badge"></span>
      </motion.button>
    </div>
  );
};

const PricingCard = ({ title, price, description, features, isPopular, delay, onSelect }) => {
  return (
    <motion.div
      className={`glass-card pricing ${isPopular ? 'popular' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      {isPopular && (
        <div className="popular-badge">
          <Star size={12} fill="currentColor" /> MÁS VENDIDO
        </div>
      )}

      <div className="pricing-header">
        <h3 className={`pricing-title ${isPopular ? 'premium-title' : ''}`}>{title}</h3>
        <div className="pricing-price">
          <span className="currency">$</span>
          {price.toLocaleString('es-CL')}
          <span className="period">CLP</span>
        </div>
        <p className="pricing-desc">{description}</p>
      </div>

      <div className="pricing-divider"></div>

      <ul className="pricing-features">
        {features.map((feature, i) => (
          <li key={i}>
            <div className="check-icon">
              <Check size={14} strokeWidth={3} />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pricing-footer">
        <motion.button
          className={`pricing-btn ${isPopular ? 'btn-popular' : ''}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSelect}
        >
          Seleccionar Plan
        </motion.button>
        {isPopular && (
          <p className="recommendation-note">
            <Star size={12} className="inline-icon" /> Recomendado por equilibrio precio/calidad
          </p>
        )}
      </div>
    </motion.div>
  );
};

const AddonCard = ({ icon: Icon, title, price, description }) => (
  <motion.div
    className="addon-card"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    }}
    whileHover={{ y: -5 }}
  >
    <div className="addon-icon">
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon size={24} />
      </motion.div>
    </div>
    <div className="addon-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    <div className="addon-price">
      {typeof price === 'string' ? price : `$${price.toLocaleString('es-CL')}`}
    </div>
  </motion.div>
);

const FlowStep = ({ title, sublabel, icon: Icon, isFirst, isLast }) => {
  return (
    <div className="flow-step">
      <motion.div
        className="flow-node"
        whileHover={{ scale: 1.1 }}
      >
        <Icon size={24} />
        <div className="pulse-ring"></div>
      </motion.div>
      <div className="flow-label">{title}</div>
      <div className="flow-sublabel">{sublabel}</div>
    </div>
  );
};

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (url, title) => {
    setSelectedImage({ url, title });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const storyImages = [
    {
      index: 1,
      title: "Paso 1: Captura de Datos",
      desc: "El usuario ingresa su información en una interfaz rápida y optimizada para conversión.",
      image: "/story1.png"
    },
    {
      index: 2,
      title: "Paso 2: Procesamiento Inteligente",
      desc: "Nuestro cerebro digital valida, guarda y organiza la información en tiempo real sin errores.",
      image: "/story2.png"
    },
    {
      index: 3,
      title: "Paso 3: Automatización",
      desc: "Análisis y disparo de acciones inmediatas basadas en los datos capturados.",
      image: "/story3.jpg"
    },
    {
      index: 4,
      title: "Paso 4: Entrega de Valor",
      desc: "El cliente recibe su link personalizado al instante por WhatsApp, cerrando el ciclo de venta.",
      image: "/story4.png"
    }
  ];

  const flowSteps = [
    { title: 'Interesado', sublabel: 'Entra a mirar', icon: Users },
    { title: 'Registro', sublabel: 'Deja su contacto', icon: Layout },
    { title: 'Seguridad', sublabel: 'Privacidad total', icon: Shield },
    { title: 'Lista', sublabel: 'Todo ordenado', icon: Table },
    { title: 'Robot', sublabel: 'Trabaja para ti', icon: Cpu },
    { title: 'Aviso', sublabel: 'Envía WhatsApp', icon: MessageCircle },
    { title: '¡Listo!', sublabel: 'Cliente ganado', icon: CheckCircle2 },
  ];

  const cards = [
    {
      category: 'Atención 24/7',
      title: 'Tus Ventas No Paran',
      value: '100% Automático',
      desc: 'Tus clientes reciben sus regalos, links o contenido al instante por el canal que prefieran, sin que tú muevas un dedo.',
      icon: Zap,
      type: 'priority',
      tags: ['Soporte 24/7', 'Escalable', 'Sin fricción']
    },
    {
      category: 'Privacidad Blindada',
      title: 'Tu Información Bajo Llave',
      value: 'Confidencialidad Total',
      desc: 'Tus datos y los de tus clientes están protegidos con los más altos estándares de cifrado profesional, garantizando integridad total y total tranquilidad.',
      icon: ShieldCheck,
      type: 'security',
      tags: ['Cifrado AES', 'Privacidad', 'Integridad']
    },
    {
      category: 'Frontend Premium',
      title: 'Diseño que Enamora y Vuela',
      value: 'Calidad Superior',
      desc: 'No es solo rapidez; es una página elegante, fluida y moderna que funciona perfecto en cualquier celular, captando la atención de tus clientes desde el primer segundo.',
      icon: Globe,
      tags: ['Frontend', 'Responsive', 'Premium']
    },
    {
      category: 'Potencia Digital',
      title: 'Cerebro de Alta Precisión',
      value: 'Cero Errores',
      desc: 'Olvida los descuidos humanos. Implementamos un cerebro digital capaz de procesar miles de datos por segundo con exactitud quirúrgica, garantizando que tu negocio funcione a la perfección mientras tú descansas.',
      icon: Database,
      tags: ['Backend', 'Procesamiento', 'Sólido']
    },
    {
      category: 'Libertad',
      title: 'Tu Negocio en Piloto Automático',
      value: '100% Automatizado',
      desc: 'Elimina el trabajo manual que te quita tiempo y energía. Creamos flujos inteligentes que trabajan por ti las 24 horas, permitiéndote escalar tus ventas sin límites.',
      icon: Cpu,
      tags: ['n8n', 'Eficiencia', 'Libertad']
    },
    {
      category: 'Comunicación',
      title: 'Llega Directo al Celular',
      value: 'WhatsApp Oficial',
      desc: 'Escríbele directamente al WhatsApp de tu cliente con un mensaje oficial que genera confianza y ventas.',
      icon: Lock,
      tags: ['Meta Cloud', 'API Oficial', 'Verificado']
    },
    {
      category: 'Ingresos',
      title: 'Control de Tu Inversión',
      value: 'Máximo Provecho',
      desc: 'Mira exactamente dónde estás ganando dinero y sácale el máximo jugo a cada peso que inviertes en publicidad.',
      icon: TrendingUp,
      tags: ['ROI', 'Analytics', 'Ads Metrics']
    },
    {
      category: 'Crecimiento',
      title: 'Listo Para Crecer',
      value: 'Sin Límites',
      desc: 'Tu sistema crece contigo. Si mañana triplicas tus ventas, tu página estará lista para aguantar el ritmo sin fallar.',
      icon: Layers,
      tags: ['Escalable', 'Sin Límites', 'Potente']
    },
    {
      category: 'Garantía de Éxito',
      title: 'Tecnología para Todo Negocio',
      value: 'Adaptable a Ti',
      desc: 'Soluciones de alto nivel que funcionan para cualquier nicho. Llevamos la tecnología de punta a tu negocio, sin importar su tamaño, asegurando un crecimiento real y felicidad garantizada.',
      icon: Activity,
      tags: ['Cualquier Nicho', 'Escalable', 'Probado']
    },
    {
      category: 'Futuro',
      title: 'Inversión Inteligente',
      value: 'Tecnología Que Dura',
      desc: 'Inviertes hoy en tecnología que no caduca mañana. Tu negocio siempre estará a la última moda tecnológica.',
      icon: BarChart3,
      tags: ['Inteligente', 'Futurista', 'Inversión']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.2, 1] }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
        >
          <Bot size={48} className="text-accent-blue" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.5))' }} />
          <span className="premium-title">Página web inteligente para tu negocio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 1, 0.2, 1] }}
          style={{ maxWidth: '700px', margin: '1.5rem auto 0' }}
        >
          Recibe datos de clientes, envía mensajes automáticos por WhatsApp o email y entrega links personalizados, todo sin que tengas que hacerlo a mano.
        </motion.p>
        <motion.div
          className="button-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 1, 0.2, 1] }}
        >
          <motion.a
            href="https://osorock.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-featured"
            whileHover={{ scale: 1.05 }}
          >
            <span>VER PROYECTO</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="button-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 1, 0.2, 1] }}
        >
          <motion.a
            href="#"
            className="cta-button cta-docs"
            whileHover={{ scale: 1.05 }}
          >
            <FileText size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            <span>VER DOCUMENTACIÓN</span>
          </motion.a>

          <motion.a
            href="#"
            className="cta-button cta-security"
            whileHover={{ scale: 1.05 }}
          >
            <ShieldAlert size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            <span>VER INFORME DE SEGURIDAD</span>
          </motion.a>
        </motion.div>
      </header>

      <motion.div
        className="grid-layout"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card, index) => (
          <GlassCard
            key={index}
            {...card}
            delay={0} // Staggered by container
          />
        ))}
      </motion.div>

      <div className="header" style={{ marginTop: '8rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Arquitectura de Flujo</h2>
        <p>Procesamiento inteligente desde la captura hasta la entrega final.</p>

        <div className="flow-container">
          <div className="flow-connector"></div>
          {flowSteps.map((step, index) => (
            <FlowStep key={index} {...step} />
          ))}
        </div>
      </div>

      <div className="header" style={{ marginTop: '8rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Así funciona tu página web</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Al completar el formulario, tus datos se guardan en Excel y se envía un mensaje automático por WhatsApp o correo. <br />
          Todo 100% automático, sin trabajo manual y sin perder clientes.
        </p>

        <div className="video-placeholder-container">
          <motion.div
            className="video-placeholder"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="video-icon-wrapper">
              <Play size={48} className="video-play-icon" fill="currentColor" />
            </div>
            <div className="video-content">
              <h3>Demo en Acción</h3>
              <p>Próximamente: Mira cómo funciona el sistema automático en tiempo real.</p>
            </div>
            {/* Abstract Background Elements */}
            <div className="video-bg-glow"></div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section" style={{ marginTop: '8rem' }}>
        <div className="header">
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Planes Páginas Web</h2>
          <p>Diseñadas para convertir visitantes en clientes, con automatización y seguridad incluida.</p>
        </div>

        <div className="pricing-grid">
          <PricingCard
            title="Plan Básico"
            price={199000}
            description="Ideal para emprendedores que quieren presencia profesional rápida."
            delay={0}
            features={[
              "1 landing page moderna y responsive",
              "1 sección principal",
              "Botón de WhatsApp",
              "Formulario de contacto simple",
              "Optimización de velocidad",
              "Seguridad web incluida 🔐",
              "Soporte post-entrega por 7 días",
              "Entrega: 3 a 5 días hábiles"
            ]}
            onSelect={() => window.open(`https://wa.me/56950901683?text=${encodeURIComponent("Hola, me interesa el Plan Básico de $199.000")}`, '_blank')}
          />

          <PricingCard
            title="Plan Premium"
            price={399000}
            isPopular={true}
            description="Perfecto para negocios que quieren generar clientes automáticamente."
            delay={0.1}
            features={[
              "Todo lo del Plan Básico",
              "Hasta 5 secciones personalizadas",
              "Animaciones suaves y diseño atractivo",
              "Automatización n8n: Form → Correo",
              "Automatización n8n: Form → Sheets",
              "SEO básico incluido",
              "Seguridad avanzada 🔐",
              "Entrega: 5 a 7 días hábiles"
            ]}
            onSelect={() => window.open(`https://wa.me/56950901683?text=${encodeURIComponent("Hola, me interesa el Plan Premium de $399.000 (Recomendado)")}`, '_blank')}
          />

          <PricingCard
            title="Plan Avanzado"
            price={699000}
            description="Para empresas que quieren vender y escalar con procesos automáticos."
            delay={0.2}
            features={[
              "Todo lo del Plan Premium",
              "Automatización: Form → WhatsApp",
              "Registro en CRM básico",
              "Gestión de clientes (Pipeline)",
              "Copywriting para ventas",
              "Integración redes sociales",
              "Soporte prioritario",
              "Seguridad premium 🔐"
            ]}
            onSelect={() => window.open(`https://wa.me/56950901683?text=${encodeURIComponent("Hola, me interesa el Plan Avanzado de $699.000")}`, '_blank')}
          />
        </div>

        {/* Add-ons & Optional */}
        <div className="addons-container" style={{ marginTop: '4rem' }}>
          <h3 className="section-subtitle">Potencia tu Plan (Opcionales)</h3>
          <motion.div
            className="addons-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <AddonCard
              icon={Bot}
              title="Automatización Simple"
              description="Correo automático o registro en planilla."
              price={50000}
            />
            <AddonCard
              icon={Zap}
              title="Automatización Media"
              description="WhatsApp + correo automático instantáneo."
              price={90000}
            />
            <AddonCard
              icon={Cpu}
              title="Automatización Completa"
              description="Sistema tipo CRM + flujos de venta."
              price="150k - 200k"
            />
            <AddonCard
              icon={Server}
              title="Hosting y Dominio"
              description="Servidores rápidos y tu nombre .cl/.com"
              price="75.000 / año"
            />
          </motion.div>
        </div>

        {/* Trust Banner */}
        <motion.div
          className="trust-banner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="trust-content">
            <ShieldCheck size={32} className="trust-icon" />
            <div>
              <h4>Seguridad Web Incluida en Todos los Planes</h4>
              <p>Certificado SSL • Protección Anti-Spam • Datos Cifrados • Copias de Seguridad</p>
            </div>
          </div>
        </motion.div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage?.url}
        title={selectedImage?.title}
        onClose={closeImage}
      />

      <footer style={{ marginTop: '8rem', textAlign: 'center', paddingBottom: '4rem' }}>
        <div className="social-links">
          <motion.a
            href="#"
            className="social-icon linkedin"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="#"
            className="social-icon instagram"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a
            href="#"
            className="social-icon gmail"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>© 2026 Simón Labraña Arias. Todos los derechos reservados.</p>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
