'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useCallback } from 'react';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  const handleSecondaryCTA = useCallback(() => scrollToSection('pipeline'), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Blue gradient glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/20 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-text"
        >
          AI Team.{' '}
          <span className="text-accent">Không cần thuê dev.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mx-auto"
        >
          Mô tả ý tưởng trên Telegram — đội ngũ AI sẽ tự lên kế hoạch, viết code,
          review và deploy sản phẩm của bạn. Không cần dev, không cần quản lý.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
        >
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-text font-semibold rounded-xl transition-colors cursor-pointer w-full sm:w-auto"
          >
            Bắt đầu ngay
            <ArrowRight size={18} />
          </a>
          <button
            type="button"
            onClick={handleSecondaryCTA}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:border-accent text-text font-semibold rounded-xl transition-colors cursor-pointer w-full sm:w-auto"
          >
            Xem cách hoạt động
            <ChevronDown size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
