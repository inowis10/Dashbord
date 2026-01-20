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
  Bot
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
      image: "/story3.png"
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
          transition={{ duration: 1, ease: [0.2, 1, 0.2, 1] }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}
        >
          <Bot size={48} className="text-accent-blue" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 15px rgba(56, 189, 248, 0.5))' }} />
          Landing Page de Datos
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 1, 0.2, 1] }}
          style={{ maxWidth: '700px', margin: '1.5rem auto 0' }}
        >
          Automatiza registros y entrega links personalizados por WhatsApp o email, sin trabajo manual, y aumenta tus ventas.
        </motion.p>
        <motion.div
          className="button-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2, 1, 0.2, 1] }}
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
          transition={{ duration: 1, delay: 0.6, ease: [0.2, 1, 0.2, 1] }}
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
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Modern Dashboard</h2>
        <p>Control centralizado de operaciones digitales con visualización basada en datos y estética de alto impacto.</p>

        <div className="story-gallery">
          {storyImages.map((story) => (
            <StoryItem
              key={story.index}
              {...story}
              delay={story.index * 0.1}
              onOpen={openImage}
            />
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        image={selectedImage?.url}
        title={selectedImage?.title}
        onClose={closeImage}
      />

      <footer style={{ marginTop: '8rem', textAlign: 'center', color: 'var(--text-muted)', paddingBottom: '4rem', fontSize: '0.875rem' }}>
        <p>© 2026 Dashboard Premium • Construido para la Excelencia Digital</p>
      </footer>

      {/* Botón Flotante de WhatsApp */}
      <motion.a
        href="#"
        className="whatsapp-float"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={32} fill="white" />
      </motion.a>
    </div>
  );
}

export default App;
