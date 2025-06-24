"use client";

import { useEffect, useState } from "react";

type MotionProps = {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
};

// A simplified motion library compatible with server components
export function motion(Component: any) {
  return function MotionComponent({ 
    children, 
    initial, 
    animate, 
    transition, 
    className, 
    ...props 
  }: MotionProps & Record<string, any>) {
    const [state, setState] = useState(initial);

    useEffect(() => {
      // Simple animation logic
      if (animate) {
        const timer = setTimeout(() => {
          setState(animate);
        }, 10); // Small delay to ensure initial state is applied first
        
        return () => clearTimeout(timer);
      }
    }, [animate]);
    
    // Generate transform style based on state
    const getTransformStyle = () => {
      if (!state) return {};
      
      const transforms = [];
      
      if (state.x !== undefined) transforms.push(`translateX(${state.x}px)`);
      if (state.y !== undefined) transforms.push(`translateY(${state.y}px)`);
      if (state.scale !== undefined) transforms.push(`scale(${state.scale})`);
      if (state.rotate !== undefined) transforms.push(`rotate(${state.rotate}deg)`);
      
      if (transforms.length > 0) {
        return { transform: transforms.join(' ') };
      }
      
      return {};
    };
    
    // Generate transition style
    const getTransitionStyle = () => {
      if (!transition) return {};
      
      const { duration = 0.3, delay = 0 } = transition;
      
      return { 
        transition: `all ${duration}s ease ${delay}s` 
      };
    };
    
    // Generate other styles from state
    const getOtherStyles = () => {
      if (!state) return {};
      
      const styles: Record<string, any> = {};
      
      if (state.opacity !== undefined) styles.opacity = state.opacity;
      
      return styles;
    };
    
    const style = {
      ...getTransformStyle(),
      ...getTransitionStyle(),
      ...getOtherStyles(),
    };
    
    if (Component === 'div') {
      return (
        <div className={className} style={style} {...props}>
          {children}
        </div>
      );
    }
    
    return (
      <Component className={className} style={style} {...props}>
        {children}
      </Component>
    );
  };
}

// Create basic motion components
motion.div = motion('div');
motion.section = motion('section');
motion.footer = motion('footer');